import React, { useEffect } from 'react'
import SignupPage from '../../../components/SignupPage'

const Partnersignup = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <SignupPage user_type="partnersignup" />
        </>
    )

}

export default Partnersignup;
