import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronDown, FaFileAlt, FaFolder } from 'react-icons/fa';

interface TreeNode {
  name: string;
  topic?: string;
  isFile: boolean;
  children: TreeNode[];
}

interface TreeData {
  name: string;
  startPage?: string;
  children: TreeNode[];
}

interface TreeNodeProps {
  node: TreeNode;
  depth?: number;
  isLast?: boolean;
  parentPrefix?: string;
}

const parseXMLToTree = (xmlString: string): TreeData | null => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const parseTocElement = (element: Element): TreeNode => {
    const topic = element.getAttribute('topic');
    const children = Array.from(element.children).filter(child => child.tagName === 'toc-element');

    return {
      name: topic ? topic.replace('.md', '') : 'Unknown',
      topic: topic || undefined,
      isFile: topic ? topic.endsWith('.md') : false,
      children: children.map(parseTocElement)
    };
  };

  const instanceProfile = xmlDoc.querySelector('instance-profile');
  if (!instanceProfile) return null;

  const startPage = instanceProfile.getAttribute('start-page');
  const tocElements = Array.from(instanceProfile.children).filter(child => child.tagName === 'toc-element');

  return {
    name: instanceProfile.getAttribute('name') || 'Root',
    startPage: startPage || undefined,
    children: tocElements.map(parseTocElement)
  };
};

const TreeNodeComponent: React.FC<TreeNodeProps> = ({
  node,
  depth = 0,
  isLast = false,
  parentPrefix = ''
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const hasChildren: boolean = node.children && node.children.length > 0;

  const currentPrefix: string = depth === 0 ? '' :
    parentPrefix + (isLast ? '└── ' : '├── ');

  const childPrefix: string = depth === 0 ? '' :
    parentPrefix + (isLast ? '    ' : '│   ');

  const getUrl = (topic?: string): string | null => {
    if (!topic || !topic.endsWith('.md')) return null;
    const nameWithoutMd = topic.replace('.md', '').toLowerCase();
    return `https://blog.reg.rip/${nameWithoutMd}.html`;
  };

  const url: string | null = getUrl(node.topic);

  const handleToggleExpand = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="font-mono text-sm">
      <div className="flex items-center hover:bg-gray-100 rounded px-1">
        <span className="text-gray-400 whitespace-pre">{currentPrefix}</span>

        {hasChildren && (
          <button
            onClick={handleToggleExpand}
            className="mr-1 p-0.5 hover:bg-gray-200 rounded"
            type="button"
          >
            {isExpanded ?
              <FaChevronDown size={14} className="text-gray-600" /> :
              <FaChevronRight size={14} className="text-gray-600" />
            }
          </button>
        )}

        {!hasChildren && <span className="w-5" />}

        <div className="flex items-center">
          {hasChildren ?
            <FaFolder size={14} className="text-emerald-400 mr-1" /> :
            <FaFileAlt size={14} className="text-gray-500 mr-1" />
          }

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-blue-800 hover:underline"
            >
              {node.name}
            </a>
          ) : (
            <span className={hasChildren ? "font-semibold text-gray-800" : "text-gray-700"}>
              {node.name}
            </span>
          )}
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {node.children.map((child: TreeNode, index: number) => (
            <TreeNodeComponent
              key={`${child.name}-${index}`}
              node={child}
              depth={depth + 1}
              isLast={index === node.children.length - 1}
              parentPrefix={childPrefix}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const XMLTreeViewer: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const xmlUrl: string = 'https://raw.githubusercontent.com/Yayoi-cs/blog/refs/heads/master/Writerside/tsune.tree';

  useEffect(() => {
    const fetchAndParseXML = async (): Promise<void> => {
      try {
        setLoading(true);
        const response: Response = await fetch(xmlUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch XML: ${response.status}`);
        }

        const xmlText: string = await response.text();
        const parsedTree: TreeData | null = parseXMLToTree(xmlText);

        if (!parsedTree) {
          throw new Error('Failed to parse XML structure');
        }

        setTreeData(parsedTree);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
        console.error('Error fetching/parsing XML:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndParseXML();
  }, [xmlUrl]);

  const handleRetry = (): void => {
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
          <div className="space-y-2">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-red-800 font-semibold mb-2">Error Loading XML</h2>
          <p className="text-red-600">{error}</p>
          <button
            onClick={handleRetry}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            type="button"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!treeData) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center text-gray-500">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="pl-4">
          {treeData.children.map((child: TreeNode, index: number) => (
            <TreeNodeComponent
              key={`${child.name}-${index}`}
              node={child}
              depth={0}
              isLast={index === treeData.children.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default XMLTreeViewer;
