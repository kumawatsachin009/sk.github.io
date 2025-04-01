import React, { useEffect, useRef, useState } from 'react';
import Scene3D from './Scene3D';

const Portfolio3D = () => {
    const containerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    let scene3D = null;

    useEffect(() => {
        try {
            if (containerRef.current && !scene3D) {
                scene3D = new Scene3D(containerRef.current);
                setIsLoading(false);
            }
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }

        return () => {
            if (scene3D) {
                // Cleanup
                window.removeEventListener('resize', scene3D.onWindowResize);
                containerRef.current?.removeChild(scene3D.renderer.domElement);
                scene3D = null;
            }
        };
    }, []);

    return (
        <div className="portfolio-3d-container" style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #1a1a1a, #2a2a2a)'
        }}>
            <div ref={containerRef} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }} />
            <div className="portfolio-content" style={{
                position: 'relative',
                zIndex: 1,
                color: '#ffffff',
                padding: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <h1>Welcome to My Portfolio</h1>
                <p>Interactive 3D Experience</p>
                {isLoading && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#ffffff',
                        fontSize: '1.2rem'
                    }}>
                        Loading 3D Experience...
                    </div>
                )}
                {error && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#ff4444',
                        fontSize: '1.2rem',
                        textAlign: 'center'
                    }}>
                        Error: {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio3D; 