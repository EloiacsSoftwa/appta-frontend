import { useState, useEffect, useRef } from 'react';

const useBarcodeScanner = (onChange, delay = 50) => {
    const [barcode, setBarcode] = useState('');
    const timerRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e?.key?.length > 1) return;

            setBarcode(prev => prev + e.key);

            clearTimeout(timerRef.current);

            timerRef.current = setTimeout(() => {
                onChange(barcode);
                setBarcode('');
            }, delay);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [onChange, delay]);

    return barcode;
};

export default useBarcodeScanner;
