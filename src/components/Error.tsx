import React from 'react'
import styles from './Error.module.css'

type Props = {
    error: {
        [name: string]: any
    }
}

const Error = (props: Props) => {
    return (
        <div>
            <p className={styles.errorMessage}>{props.error.message}</p>
        </div>
    )
}

export default Error
