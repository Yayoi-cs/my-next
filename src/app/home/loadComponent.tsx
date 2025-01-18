interface LoadComponentProps {
    isLoading: boolean
}

const LoadComponent: React.FC<LoadComponentProps> = ({ isLoading }) => {
    return (
        <>
            <div className={`spinner-wrap flex flex-col items-center justify-center min-h-screen min-w-full ${!isLoading ? 'opacity-0 duration-1000 transition-opacity' : ``}`}>
                <div className={`spinner-box ${!isLoading ? 'fade-out' : ``}`}>
                    <div className="blue-orbit leo">
                    </div>
                    <div className="green-orbit leo">
                    </div>
                    <div className="red-orbit leo">
                    </div>
                    <div className="white-orbit w1 leo">
                    </div>
                    <div className="white-orbit w2 leo">
                    </div>
                    <div className="white-orbit w3 leo">
                    </div>
                </div>
                <style jsx>
                    {`
                        .spinner-wrap {
                            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
                        }

                        @keyframes spin {
                            from {
                                transform: rotate(0);
                            }
                            to {
                                transform: rotate(359deg);
                            }
                        }

                        @keyframes spin3D {
                            from {
                                transform: rotate3d(.5, .5, .5, 360deg);
                            }
                            to {
                                transform: rotate3d(0, 0, 0, 0deg);
                            }
                        }

                        @keyframes configure-clockwise {
                            0% {
                                transform: rotate(0);
                            }
                            25% {
                                transform: rotate(90deg);
                            }
                            50% {
                                transform: rotate(180deg);
                            }
                            75% {
                                transform: rotate(270deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes configure-xclockwise {
                            0% {
                                transform: rotate(45deg);
                            }
                            25% {
                                transform: rotate(-45deg);
                            }
                            50% {
                                transform: rotate(-135deg);
                            }
                            75% {
                                transform: rotate(-225deg);
                            }
                            100% {
                                transform: rotate(-315deg);
                            }
                        }

                        @keyframes pulse {
                            from {
                                opacity: 1;
                                transform: scale(1);
                            }
                            to {
                                opacity: .25;
                                transform: scale(.75);
                            }
                        }

                        .spinner-box {
                            width: 300px;
                            height: 300px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: transparent;
                            transition: opacity 1s ease, visibility 1s ease;
                        }

                        .spinner-box.fade-out {
                            opacity: 0;
                            visibility: hidden;
                        }

                        { /**/
                        }

                        .leo-border-1 {
                            position: absolute;
                            width: 150px;
                            height: 150px;
                            padding: 3px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                            background: rgb(63, 249, 220);
                            background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, rgba(63, 249, 220, 1) 100%);
                            animation: spin3D 1.8s linear 0s infinite;
                        }

                        .leo-core-1 {
                            width: 100%;
                            height: 100%;
                            background-color: #37474faa;
                            border-radius: 50%;
                        }

                        .leo-border-2 {
                            position: absolute;
                            width: 150px;
                            height: 150px;
                            padding: 3px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                            background: rgb(251, 91, 83);
                            background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, rgba(251, 91, 83, 1) 100%);
                            animation: spin3D 2.2s linear 0s infinite;
                        }

                        .leo-core-2 {
                            width: 100%;
                            height: 100%;
                            background-color: #1d2630aa;
                            border-radius: 50%;
                        }

                        /* ALTERNATING ORBITS */

                        .circle-border {
                            width: 150px;
                            height: 150px;
                            padding: 3px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                            background: rgb(63, 249, 220);
                            background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, rgba(63, 249, 220, 1) 100%);
                            animation: spin .8s linear 0s infinite;
                        }

                        .circle-core {
                            width: 100%;
                            height: 100%;
                            background-color: #1d2630;
                            border-radius: 50%;
                        }

                        /* X-ROTATING BOXES */

                        .configure-border-1 {
                            width: 115px;
                            height: 115px;
                            padding: 3px;
                            position: absolute;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: #fb5b53;
                            animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
                        }

                        .configure-border-2 {
                            width: 115px;
                            height: 115px;
                            padding: 3px;
                            left: -115px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: rgb(63, 249, 220);
                            transform: rotate(45deg);
                            animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
                        }

                        .configure-core {
                            width: 100%;
                            height: 100%;
                            background-color: #1d2630;
                        }

                        /* PULSE BUBBLES */

                        .pulse-container {
                            width: 120px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .pulse-bubble {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            background-color: #3ff9dc;
                        }

                        .pulse-bubble-1 {
                            animation: pulse .4s ease 0s infinite alternate;
                        }

                        .pulse-bubble-2 {
                            animation: pulse .4s ease .2s infinite alternate;
                        }

                        .pulse-bubble-3 {
                            animation: pulse .4s ease .4s infinite alternate;
                        }

                        .solar-system {
                            width: 250px;
                            height: 250px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .orbit {
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid #fafbfC;
                            border-radius: 50%;
                        }

                        .earth-orbit {
                            width: 165px;
                            height: 165px;
                            -webkit-animation: spin 12s linear 0s infinite;
                        }

                        .venus-orbit {
                            width: 120px;
                            height: 120px;
                            -webkit-animation: spin 7.4s linear 0s infinite;
                        }

                        .mercury-orbit {
                            width: 90px;
                            height: 90px;
                            -webkit-animation: spin 3s linear 0s infinite;
                        }

                        .planet {
                            position: absolute;
                            top: -5px;
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background-color: #3ff9dc;
                        }

                        .sun {
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            background-color: #ffab91;
                        }

                        .leo {
                            position: absolute;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                        }

                        .blue-orbit {
                            width: 400px;
                            height: 400px;
                            //border: 3px solid #91daffa5;
                            border: 2px solid #FA84D1;
                            -webkit-animation: spin3D 3s linear .2s infinite;
                        }

                        .green-orbit {
                            width: 300px;
                            height: 300px;
                            //border: 2px solid #91ffbfa5;
                            border: 2px solid #8496FA;
                            -webkit-animation: spin3D 2s linear 0s infinite;
                        }

                        .red-orbit {
                            width: 250px;
                            height: 250px;
                            //border: 2px solid #ffca91a5;
                            border: 3px solid #84d1fa;
                            -webkit-animation: spin3D 1s linear 0s infinite;
                        }

                        .white-orbit {
                            width: 180px;
                            height: 180px;
                            border: 3px solid #ffffff;
                            -webkit-animation: spin3D 10s linear 0s infinite;
                        }

                        .w1 {
                            transform: rotate3D(1, 1, 1, 90deg);
                        }

                        .w2 {
                            transform: rotate3D(1, 2, .5, 90deg);
                        }

                        .w3 {
                            transform: rotate3D(.5, 1, 2, 90deg);
                        }

                        .three-quarter-spinner {
                            width: 50px;
                            height: 50px;
                            border: 3px solid #fb5b53;
                            border-top: 3px solid transparent;
                            border-radius: 50%;
                            animation: spin .5s linear 0s infinite;
                        }
                    `}
                </style>
            </div>
        </>
    )
}

export default LoadComponent