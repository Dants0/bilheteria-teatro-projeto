import React from 'react'

import * as HoverCard from '@radix-ui/react-hover-card';

import './hovercard.css'

const Hovercard = (props) => {

    const array = props.Elenco

    return (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                <img
                    className="Image normal"
                    src={props.imgPoster}
                    alt="Radix UI"
                />
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <div>
                                <div className="Text bold">{props.Title}</div>
                            </div>
                            <div className="Text">
                                {props.Sinopse}
                            </div>
                            <div style={{ display: 'flex', gap: 15 }}>
                                <div style={{ display: 'flex', gap: 5 }}>
                                    <div className="Text faded">
                                        <ul>
                                            Horários
                                            <li>
                                                13:50
                                            </li>
                                            <li>
                                                16:50
                                            </li>
                                            <li>
                                                20:50
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 5 }}>
                                    <div className="Text faded">
                                        Elenco
                                        <ul>
                                            <li key={array.id}>
                                                {
                                                    array[0]
                                                }
                                            </li>
                                            <li key={array.id}>
                                                {
                                                    array[1]
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <HoverCard.Arrow className="HoverCardArrow" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

export default Hovercard