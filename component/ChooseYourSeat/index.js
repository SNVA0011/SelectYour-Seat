import React, { useState } from 'react'
import style from './chsseatyr.module.css';

const index = () => {
    const [selected, setSelected] = useState({});

    const selectBtn = (val) => {
        setSelected(() => ({
            ...selected,
            [val]: !selected[val]
        }))
    } 

    return (
        <div className={style.FillChsSeat}>
            <div className={style.AirplaneWrapper}>
                <div className={style.AirplaneBxHeader}>
                    <img src='/images/addon/airplaneseat-head.png' />
                </div>

                {/*======= AirplaneBxBody =======*/}
                <div className={style.AirplaneBxBody}>

                    <table class={`table ${style.AirPlTable}`}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th className={style.AirPlSpace}></th>
                                <th>D</th>
                                <th>E</th>
                                <th>F</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={style.AirPlRowName}>1</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>1A
                                        <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${selected[`${1}`] ? style.Active : ""}`} onClick={() => { selectBtn(1) }}>1B
                                        <div className={style.SeatDefTooltio}>1B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${selected[`${2}`] ? style.Active : ""}`} onClick={() => { selectBtn(2) }}>1C
                                        <div className={style.SeatDefTooltio}>1C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>1D
                                        <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>1E
                                        <div className={style.SeatDefTooltio}>1E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>1F
                                        <div className={style.SeatDefTooltio}>1F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>1</td>
                            </tr>

                            <tr>
                                <td className={style.AirPlRowName}>2</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>2A
                                        <div className={style.SeatDefTooltio}>2A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>2B
                                        <div className={style.SeatDefTooltio}>2B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>2C
                                        <div className={style.SeatDefTooltio}>2C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>2D
                                        <div className={style.SeatDefTooltio}>2D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>2E
                                        <div className={style.SeatDefTooltio}>2E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>2F
                                    <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>2</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>3</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>3A
                                        <div className={style.SeatDefTooltio}>3A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>3B
                                        <div className={style.SeatDefTooltio}>3B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>3C
                                        <div className={style.SeatDefTooltio}>3C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>3D
                                        <div className={style.SeatDefTooltio}>3D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>3E
                                        <div className={style.SeatDefTooltio}>3E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>3F
                                    <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>3</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>4</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>4A
                                        <div className={style.SeatDefTooltio}>4A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>4B
                                        <div className={style.SeatDefTooltio}>4B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>4C
                                        <div className={style.SeatDefTooltio}>4C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>4D
                                        <div className={style.SeatDefTooltio}>4D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>4E
                                        <div className={style.SeatDefTooltio}>4E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>4F
                                        <div className={style.SeatDefTooltio}>4F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>4</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>5</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>5A
                                        <div className={style.SeatDefTooltio}>5A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>5B
                                        <div className={style.SeatDefTooltio}>5B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>5C
                                        <div className={style.SeatDefTooltio}>5C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>5D
                                        <div className={style.SeatDefTooltio}>5D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>5E
                                        <div className={style.SeatDefTooltio}>5E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>5F
                                        <div className={style.SeatDefTooltio}>5F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>5</td>
                            </tr>




                            <tr>
                                <td className={style.AirPlRowName}>6</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>6A
                                        <div className={style.SeatDefTooltio}>6A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>6B
                                        <div className={style.SeatDefTooltio}>6B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>6C
                                        <div className={style.SeatDefTooltio}>6C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>6D
                                        <div className={style.SeatDefTooltio}>6D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>6E
                                        <div className={style.SeatDefTooltio}>6E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>6F
                                        <div className={style.SeatDefTooltio}>6F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>6</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>7</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>7A
                                        <div className={style.SeatDefTooltio}>7A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                   <button className={`btn ${style.SeatDef}`}>7B
                                          <div className={style.SeatDefTooltio}>7B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>7C
                                        <div className={style.SeatDefTooltio}>7C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>7D
                                        <div className={style.SeatDefTooltio}>7D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>7E
                                        <div className={style.SeatDefTooltio}>7E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>7F
                                        <div className={style.SeatDefTooltio}>7F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>7</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>8</td>
                                <td>
                                   <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>8A
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                  <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>8B
                                          <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                  <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>8C
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                  <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>8D
                                        <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                   <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>8E
                                          <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>8F
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>8</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>9</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>9A
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>9B
                                          <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                   <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>9C
                                     <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>9D
                                        <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>9E
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>9F
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>9</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>10</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>10A
                                        <div className={style.SeatDefTooltio}>10A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>10B
                                        <div className={style.SeatDefTooltio}>10B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>10C
                                        <div className={style.SeatDefTooltio}>10C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>10D
                                        <div className={style.SeatDefTooltio}>10D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>10E
                                        <div className={style.SeatDefTooltio}>10E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                   <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>10F
                                       <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>10</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>11</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>11A
                                        <div className={style.SeatDefTooltio}>11A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                   <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>11B
                                        <div className={style.SeatDefTooltio}>11B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>11C
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>11D
                                        <div className={style.SeatDefTooltio}>11D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>11E
                                        <div className={style.SeatDefTooltio}>11E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>11F
                                        <div className={style.SeatDefTooltio}>11F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>11</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>12</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>12A
                                        <div className={style.SeatDefTooltio}>12A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>12B
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>12C
                                        <div className={style.SeatDefTooltio}>12C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>12D
                                        <div className={style.SeatDefTooltio}>12D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>12E
                                        <div className={style.SeatDefTooltio}>12E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>12F
                                        <div className={style.SeatDefTooltio}>12F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>12</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>13</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>13A
                                        <div className={style.SeatDefTooltio}>13A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>13B
                                          <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>13C
                                        <div className={style.SeatDefTooltio}>13C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>13D
                                        <div className={style.SeatDefTooltio}>13D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>13E
                                        <div className={style.SeatDefTooltio}>13E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>13F
                                        <div className={style.SeatDefTooltio}>13F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>13</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>14</td>
                                <td>
                                   <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>14A
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>14B
                                        <div className={style.SeatDefTooltio}>14B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>14C
                                        <div className={style.SeatDefTooltio}>14C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>14D
                                        <div className={style.SeatDefTooltio}>14D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>14E
                                        <div className={style.SeatDefTooltio}>14E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>14F
                                        <div className={style.SeatDefTooltio}>14F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>14</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>15</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>15A
                                        <div className={style.SeatDefTooltio}>15A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>15B
                                        <div className={style.SeatDefTooltio}>15B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>15C
                                        <div className={style.SeatDefTooltio}>15C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>15D
                                        <div className={style.SeatDefTooltio}>15D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>15E
                                        <div className={style.SeatDefTooltio}>15E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>15F
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>15</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>16</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>16A
                                        <div className={style.SeatDefTooltio}>16A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>16B
                                        <div className={style.SeatDefTooltio}>16B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>16C
                                        <div className={style.SeatDefTooltio}>16C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>16D
                                        <div className={style.SeatDefTooltio}>16D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>16E
                                        <div className={style.SeatDefTooltio}>16E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>16F
                                        <div className={style.SeatDefTooltio}>16F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>16</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>17</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>17A
                                        <div className={style.SeatDefTooltio}>17A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>17B
                                        <div className={style.SeatDefTooltio}>17B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>17C
                                        <div className={style.SeatDefTooltio}>17C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>17D
                                        <div className={style.SeatDefTooltio}>17D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>17E
                                        <div className={style.SeatDefTooltio}>17E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>17F
                                        <div className={style.SeatDefTooltio}>17F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>17</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>18</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>18A
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>18B
                                        <div className={style.SeatDefTooltio}>18B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>18C
                                        <div className={style.SeatDefTooltio}>18C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>18D
                                        <div className={style.SeatDefTooltio}>18D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>18E
                                        <div className={style.SeatDefTooltio}>18E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>18F
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>18</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>19</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>19A
                                        <div className={style.SeatDefTooltio}>19A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>19B
                                        <div className={style.SeatDefTooltio}>19B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>19C
                                        <div className={style.SeatDefTooltio}>19C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>19D
                                        <div className={style.SeatDefTooltio}>19D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>19E
                                        <div className={style.SeatDefTooltio}>19E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>19F
                                        <div className={style.SeatDefTooltio}>19F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>19</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>20</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>20A
                                        <div className={style.SeatDefTooltio}>20A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>20B
                                        <div className={style.SeatDefTooltio}>20B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>20C
                                        <div className={style.SeatDefTooltio}>20C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>20D
                                       <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>20E
                                        <div className={style.SeatDefTooltio}>20E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>20F
                                        <div className={style.SeatDefTooltio}>20F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>20</td>
                            </tr>




                            <tr>
                                <td className={style.AirPlRowName}>21</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>21A
                                        <div className={style.SeatDefTooltio}>21A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>21B
                                        <div className={style.SeatDefTooltio}>21B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>21C
                                        <div className={style.SeatDefTooltio}>21C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>21D
                                        <div className={style.SeatDefTooltio}>21D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>21E
                                          <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>21F
                                        <div className={style.SeatDefTooltio}>21F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>21</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>22</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>22A
                                        <div className={style.SeatDefTooltio}>22A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>22B
                                        <div className={style.SeatDefTooltio}>22B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>22C
                                        <div className={style.SeatDefTooltio}>22C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>22D
                                        <div className={style.SeatDefTooltio}>22D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>22E
                                        <div className={style.SeatDefTooltio}>22E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>22F
                                        <div className={style.SeatDefTooltio}>22F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>22</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>23</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>23A
                                        <div className={style.SeatDefTooltio}>23A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>23B
                                        <div className={style.SeatDefTooltio}>23B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>23C
                                        <div className={style.SeatDefTooltio}>23C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>23D
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>23E
                                        <div className={style.SeatDefTooltio}>23E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>23F
                                        <div className={style.SeatDefTooltio}>23F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>23</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>24</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>24A
                                        <div className={style.SeatDefTooltio}>24A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>24B
                                        <div className={style.SeatDefTooltio}>24B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>24C
                                        <div className={style.SeatDefTooltio}>24C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>24D
                                          <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>24E
                                        <div className={style.SeatDefTooltio}>24E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>24F
                                        <div className={style.SeatDefTooltio}>24F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>24</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>25</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>25A
                                        <div className={style.SeatDefTooltio}>25A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>25B
                                        <div className={style.SeatDefTooltio}>25B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>25C
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>25D
                                        <div className={style.SeatDefTooltio}>25D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>25E
                                        <div className={style.SeatDefTooltio}>25E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>25F
                                        <div className={style.SeatDefTooltio}>25F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>25</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>26</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>26A
                                        <div className={style.SeatDefTooltio}>26A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>26B
                                        <div className={style.SeatDefTooltio}>26B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>26C
                                        <div className={style.SeatDefTooltio}>26C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>26D
                                        <div className={style.SeatDefTooltio}>26D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>26E
                                        <div className={style.SeatDefTooltio}>26E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>26F
                                        <div className={style.SeatDefTooltio}>26F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>26</td>
                            </tr>



                            <tr>
                                <td className={style.AirPlRowName}>27</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>27A
                                        <div className={style.SeatDefTooltio}>27A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>27B
                                        <div className={style.SeatDefTooltio}>27B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>27C
                                        <div className={style.SeatDefTooltio}>27C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>27D
                                        <div className={style.SeatDefTooltio}>27D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>27E
                                        <div className={style.SeatDefTooltio}>27E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>27F
                                        <div className={style.SeatDefTooltio}>27F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>27</td>
                            </tr>



                            <tr>
                                <td className={style.AirPlRowName}>28</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>28A
                                         <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>28B
                                        <div className={style.SeatDefTooltio}>28B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>28C
                                        <div className={style.SeatDefTooltio}>28C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>28D
                                        <div className={style.SeatDefTooltio}>28D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightBl}`}>28E
                                        <div className={style.SeatDefTooltio}>28E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>28F
                                        <div className={style.SeatDefTooltio}>28F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>28</td>
                            </tr>


                            <tr>
                                <td className={style.AirPlRowName}>29</td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>29A
                                        <div className={style.SeatDefTooltio}>29A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>29B
                                        <div className={style.SeatDefTooltio}>29B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>29C
                                        <div className={style.SeatDefTooltio}>29C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>29D
                                        <div className={style.SeatDefTooltio}>29D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>29E
                                        <div className={style.SeatDefTooltio}>29E, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                     <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>29F
                                       <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>29</td>
                            </tr>



                            <tr>
                                <td className={style.AirPlRowName}>30</td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>30A
                                        <div className={style.SeatDefTooltio}>30A, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.DarkBl}`}>30B
                                        <div className={style.SeatDefTooltio}>30B, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>30C
                                        <div className={style.SeatDefTooltio}>30C, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlSpace}></td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.LightGr}`}>30D
                                        <div className={style.SeatDefTooltio}>30D, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef} ${style.Disable}`} disabled={true}>30E
                                        <div className={style.SeatDefTooltio}>Occupied</div>
                                    </button>
                                </td>
                                <td>
                                    <button className={`btn ${style.SeatDef}`}>30F
                                        <div className={style.SeatDefTooltio}>30F, <span>₹600</span></div>
                                    </button>
                                </td>
                                <td className={style.AirPlRowName}>30</td>
                            </tr>




                        </tbody>
                    </table>
                </div>
                {/*======= end AirplaneBxBody =======*/}

                <div className={style.AirplaneBxFooter}></div>
            </div>
        </div>
    )
}

export default index