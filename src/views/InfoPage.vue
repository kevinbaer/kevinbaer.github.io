<template>
    <div class="container">
        <h1 class="display-1">Information</h1>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam assumenda quia? Non numquam nesciunt rem qui quo sunt nostrum, dolor aspernatur nam fugit deleniti illum odio eum modi eveniet?</h3>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Lorem ipsum
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni id, delectus ad fuga officia, deleniti esse laudantium explicabo fugiat molestiae eius accusamus qui tempore impedit blanditiis? Sit repudiandae incidunt ea.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Lorem ipsum
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quasi quae aliquid iste, eligendi modi. Fugiat saepe laborum necessitatibus, animi quod eius earum, quisquam molestias corporis nesciunt maxime, voluptatum dolore.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Lorem ipsum
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolores eveniet quibusdam iure magni, quam hic, aut asperiores, 
                        placeat consequuntur cumque voluptate inventore fuga doloremque 
                        in commodi aperiam optio eius atque?
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 p-3">
                <p><strong>Lorem ipsum dolor</strong>  sit amet consectetur adipisicing elit.
                 Numquam libero deserunt ut ullam. Iure dolor totam doloribus 
                 culpa officia enim eveniet amet nam, aliquam soluta delectus
                  aliquid repellat, numquam sed. Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Iste harum, architecto aliquam, eligendi eos odio 
                   laudantium voluptas doloremque possimus excepturi distinctio! Porro 
                   quos perferendis non veritatis culpa, tenetur dicta fuga?</p>
            </div>
            <div class="col-6 p-3">
                <p><strong>Lorem ipsum dolor</strong>  sit amet consectetur adipisicing elit. 
                Perferendis fugit ipsa optio delectus, assumenda non accusantium 
                tempora amet ipsum natus? Ut nulla optio libero ullam sapiente ad
                 ipsum sed autem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eligendi rerum ratione commodi sit ipsam minima ipsa pariatur 
                  ut tenetur quisquam, in nam rem nulla, praesentium libero natus? Ex,
                   necessitatibus?</p>
            </div>
        </div>
</div>
</template>

<script>
    export default {
        name: 'InfoPage'
    }
</script>

<style>
</style>