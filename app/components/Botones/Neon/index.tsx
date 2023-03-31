import React from 'react'
import CSS from "./index.module.scss"

interface IProps {

    onClick?: () => any,

    route?: string,

    primaryText?: string
}

export default function Index({ onClick, route, primaryText }: IProps) {

    return (

        <a href={ route ? route : "#" } onClick={onClick} className={CSS.Neon}>{ primaryText }</a>

    )

}
