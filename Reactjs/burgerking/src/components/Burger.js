function Burger(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-5 col-8">
                        <div className="card-header">
                            <h2>BurgerKing</h2>
                        </div>
                        <div className="card-body">
                            <p className='display-6'>BurgerKing Present a Burger of your Test</p>
                            <a href="/makeburger"><button className="btn btn-primary">Make Your Own Burger</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Burger;