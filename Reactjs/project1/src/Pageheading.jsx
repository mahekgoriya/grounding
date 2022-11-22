function Pageheading(props)
{
    return(
        <section class="bg-pentagon py-4">
            <div class="container py-3">
                <div class="row d-flex align-items-center gy-4">
                  <div class="col-md-7">
                    <h1 class="h2 mb-0 text-uppercase">{props.title}</h1>
                  </div>
                </div>
            </div>
        </section>
    )
}
export default Pageheading;