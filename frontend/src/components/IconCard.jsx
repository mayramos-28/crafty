 {/* <div className={contactCollapse ? "d-none" : "d-block"}
                        onClick={() => setContactCollapse(!contactCollapse)}
                        aria-controls="example-collapse-text"
                        aria-expanded={contactCollapse}
                        size="lg">
                        <i class="bi bi-person-lines-fill icon-style" >   </i>

                    </div>

                    <Collapse in={contactCollapse}>
                        <div id="example-collapse-text">

                            <ul>
                                {Object.keys(authUser?.seller ?? {}).map((key) =>
                                    <li> {key}: {authUser?.seller[key]} </li>)}
                            </ul>
                            <ul>
                                <li>
                                    {Object.keys(authUser?.user ?? {}).map((key) =>
                                        <li> {key}: {authUser?.user[key]} </li>)}

                                </li>
                            </ul>


                        </div>
                    </Collapse>

                    <div className={contactCollapse ? "d-block" : "d-none"}
                        onClick={() => setContactCollapse(!contactCollapse)}
                        aria-controls="example-collapse-text"
                        aria-expanded={contactCollapse}
                        size="lg">
                        <i class="bi bi-x-lg icon-style">Datos</i>

                    </div>



                </div>
            
            
{/* 
                <div className="col	col-sm-10 col-md-5 col-lg-5 col-xl-5 col-xxl-4 info-box">

                    <div className={addresCollapse ? "d-none" : "d-block"}
                        onClick={() => setAddresCollapse(!addresCollapse)}
                        aria-controls="example-collapse-text"
                        aria-expanded={addresCollapse}
                        size="lg"
                    >
                        <i class="bi bi-geo-alt icon-style" > Direciones  </i>
                    </div>


                    <Collapse in={addresCollapse}>
                        <div id="example-collapse-text">

                            {
                                userId && <AddressComponent userId={userId}></AddressComponent>
                            }

                        </div>
                    </Collapse>
                    <div className={addresCollapse ? "d-block" : "d-none"}
                        onClick={() => setAddresCollapse(!addresCollapse)}
                        aria-controls="example-collapse-text"
                        aria-expanded={addresCollapse}
                        size="lg">
                        <i class="bi bi-x-lg icon-style"></i>

                    </div>


                </div> */}

                {/* <div className="col	col-sm-10 col-md-5 col-lg-5 col-xl-5 col-xxl-4 info-box">
                    <div className={paymemnt ? "d-none" : "d-block"}
                        onClick={() => setPayment(!paymemnt)}
                        aria-controls="example-collapse-text"
                        aria-expanded={paymemnt}
                        size="lg"
                    >
                        <i class="bi bi-geo-alt icon-style" > Metodos de pago  </i>
                    </div>


                    <Collapse in={paymemnt}>
                        <div id="example-collapse-text">
                            {userId && <PaymentsTypeComponent userId={userId}></PaymentsTypeComponent>}

                        </div>
                    </Collapse>

                    <div className={paymemnt ? "d-block" : "d-none"}
                        onClick={() => setPayment(!paymemnt)}
                        aria-controls="example-collapse-text"
                        aria-expanded={paymemnt}
                        size="lg">
                        <i class="bi bi-x-lg icon-style"></i>

                    </div>
                </div>
 */}

