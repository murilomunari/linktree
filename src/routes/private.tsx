import { ReactNode, useState, useEffect} from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
    const [loding, setLoding] = useState(true);
    const [signed, setSigned] = useState(false);


    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            if(user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }

                localStorage.setItem("@detailUser", JSON.stringify(userData))
                setLoding(false);
                setSigned(true)
                
            } else {
                setLoding(false);
                setSigned(false);
            }
        })

        return () => { //função de cleanup para remover o monitoramneto
            unsub();
        }

    }, [])

    if(loding) {
        return <div></div>
    }

    if(!signed) {
        return <Navigate to="/login" />
    }


    return children;
}