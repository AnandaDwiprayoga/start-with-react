import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
    // useInViewe detect which element showing in screen ?
    const [element, isElementShow ] = useInView({threshold: 0.25});
    //untuk control kapan variant property framer animation dijalankan
    const controls = useAnimation();

    if(isElementShow){
        controls.start('show');
    }else{
        controls.start('hidden');
    }

    return [element, controls];
}