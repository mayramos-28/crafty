

export const MainProducts = () => {

    return (
        <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">
            
            <div className="mainProducts__card card-box col-lg-4 col-sm-12 my-2">
                <div className=" mainProducts__card--img">
                    <img src="" alt="img" />
                </div>
                <div className="mainProducts__card--title">
                    
                    <h3 className="py-2"> Alfarería</h3>
                </div>
            </div>
            <div className="mainProducts__card card-box col-lg-4  col-sm-12 my-2">
                <div className=" mainProducts__card--img">
                    <img src="" alt="img" />
                </div>
                <div className="mainProducts__card--title">
                    <h3 className="py-2">Ropa</h3>
                </div>
            </div>
            <div className="mainProducts__card card-box col-lg-4  col-sm-12 my-2">
                <div className=" mainProducts__card--img">
                    <img src="" alt="img" />
                </div>
                <div className="mainProducts__card--title">
               
                    <h3 className="py-2">Higiene personal</h3>
                </div>
            </div>
            <div className="mainProducts__card card-box col-lg-4  col-sm-12 my-2">
                <div className=" mainProducts__card--img">
                    <img src="" alt="img" />
                </div>
                <div className="mainProducts__card--title">
              
                    <h3 className="py-2">Hogar</h3>
                </div>
            </div>
        </div>
    );

}