import React, { useEffect, useRef } from 'react';
import '../../assets/css/WelcomePage.css';
import anime from 'animejs';

function WelcomePage() {
    const welcomePageRef = useRef();

    useEffect(() => {
        const welcomePageText = {};
        welcomePageText.opacityIn = [0, 1];
        welcomePageText.scaleIn = [0.2, 1];
        welcomePageText.scaleOut = 3;
        welcomePageText.durationIn = 800;
        welcomePageText.durationOut = 600;
        welcomePageText.delay = 500;

        anime.timeline({
            complete: () => {
                welcomePageRef.current.style.display = 'none';
            }
        })
            .add({
                targets: '.welcomePageText .line',
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700
            })
            .add({
                targets: '.welcomePageText .line',
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => (-2.5 + 2.55 * 2 * i) + "em"
            })
            .add({
                targets: '.welcomePageText .letters-1',
                opacity: welcomePageText.opacityIn,
                scale: welcomePageText.scaleIn,
                duration: welcomePageText.durationIn
            })
            // .add({
            //     targets: '.welcomePageText .letters-1',
            //     opacity: 0,
            //     scale: welcomePageText.scaleOut,
            //     duration: welcomePageText.durationOut,
            //     easing: "easeInExpo",
            //     delay: welcomePageText.delay
            // })
            .add({
                targets: '.welcomePageText .letters-2',
                opacity: welcomePageText.opacityIn,
                scale: welcomePageText.scaleIn,
                duration: welcomePageText.durationIn
            })
            // .add({
            //     targets: '.welcomePageText .letters-2',
            //     opacity: 0,
            //     scale: welcomePageText.scaleOut,
            //     duration: welcomePageText.durationOut,
            //     easing: "easeInExpo",
            //     delay: welcomePageText.delay
            // })
            .add({
                targets: '.welcomePageText .letters-3',
                opacity: welcomePageText.opacityIn,
                scale: welcomePageText.scaleIn,
                duration: welcomePageText.durationIn
            })
            // .add({
            //     targets: '.welcomePageText .letters-3',
            //     opacity: 0,
            //     scale: welcomePageText.scaleOut,
            //     duration: welcomePageText.durationOut,
            //     easing: "easeInExpo",
            //     delay: welcomePageText.delay
            // })
            .add({
                targets: '.welcomePageText .letters-4',
                opacity: welcomePageText.opacityIn,
                scale: welcomePageText.scaleIn,
                duration: welcomePageText.durationIn
            })
            // .add({
            //     targets: '.welcomePageText .letters-4',
            //     opacity: 0,
            //     scale: welcomePageText.scaleOut,
            //     duration: welcomePageText.durationOut,
            //     easing: "easeInExpo",
            //     delay: welcomePageText.delay
            // })
            .add({
                targets: '.welcomePageText',
                opacity: 0,
                duration: 500,
                delay: 500
            });
    }, []);

    return (
        <div ref={welcomePageRef} className="welcomePageText">
            <h1>
                <span className="line line1"></span>
                <div className="letters-1">Welcome</div>
                <div className="letters-2">To</div>
                <div className="letters-3">My</div>
                <div className="letters-4">Portfolio</div>
                <span className="line line2"></span>
            </h1>
        </div>
    );
}

export default WelcomePage;
