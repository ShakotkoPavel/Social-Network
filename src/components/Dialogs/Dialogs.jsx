import React from 'react'
import c from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
    <div className={c.dialogs}>
        <div className={c.dialogItems}>
            <div className={c.dialog + ' ' + c.active}>
                Andrey
            </div>
            <div className={c.dialog}>
                Andrey
            </div>
            <div className={c.dialog}>
                Andrey
            </div>
            <div className={c.dialog}>
                Masha
            </div>
            <div className={c.dialog}>
                Sergey
            </div>
            <div className={c.dialog}>
                Sveta
            </div>
        </div>
        <div className={c.messages}>
            <div className={c.message}>
                Hi!
            </div>
            <div className={c.message}>
                Ho are your?
            </div>
            <div className={c.message}>
                Hello!
            </div>
        </div>
    </div>)
}

export default Dialogs;