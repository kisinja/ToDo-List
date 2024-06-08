import Joyride from 'react-joyride';
import { useEffect, useState } from 'react';
import { steps } from './assets/steps';

const Tutorial = () => {

    const [run, setRun] = useState(false);

    useEffect(() => {
        const firstVisit = localStorage.getItem("firstVisit");

        if (!firstVisit) {
            setRun(true);
            localStorage.setItem("firstVisit", "true");
        }
    }, []);

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
            styles={{
                options: {
                    arrowColor: '#e3ffeb',
                    backgroundColor: '#e3ffeb',
                    overlayColor: 'rgba(79, 26, 0, 0.4)',
                    primaryColor: '#000',
                    textColor: '#004a14',
                    width: 300,
                    zIndex: 1000,
                }
            }}
        />
    );
};

export default Tutorial
