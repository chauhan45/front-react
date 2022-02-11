import {React , useEffect} from 'react'
import Residential from './Residential';
import { Commercial } from './Commercial';
import { Industrial } from './Industrial';
import { Transportation } from './Transportation';
import { Publicsector } from './Publicsector';
import { Union } from './Union';
import { Renovation } from './Renovation';
import  Subcontractors  from './Subcontractors';

const Solution = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
        <Residential />     
        <Commercial />
        <Industrial />
        <Transportation/>
        <Publicsector />
        <Union />
        <Renovation />
        <Subcontractors />
        </>
    )
}

export default Solution