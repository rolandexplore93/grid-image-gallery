const gallery = document.querySelector('.gallery');
        const overlay = document.querySelector('.overlay');
        const overlayImage = overlay.querySelector('img');
        const overlayClose = overlay.querySelector('.close');

        // Write a function to generate the html layout for the images
        function generateHTML([h, v]){
            return `
                <div class="item h${h} v${v}">
                    <img src="./images/${randomNumber(12)}.jpg">    
                    <div class="item__overlay">
                        <button>View</button>    
                    </div>
                </div>
            `
        } 

        // Create a helper function to generate random numbers
        function randomNumber(limit){
            return Math.floor(Math.random() * limit) + 1;
        }

        function popItem(e){
            // console.log(e.currentTarget)
            const imageSource = e.currentTarget.querySelector('img').src;
            overlayImage.src = imageSource;

            const viewImage = e.currentTarget.querySelector('button').addEventListener("click", function(){
                overlay.classList.add("open");
            });

            // overlay.classList.add("open");
        }

        function close(){
            overlay.classList.remove("open");
        }

        // Create bunch of images (e.g 50 images) and use arrays to hold the images.. i.e [1, 3], [2, 3] ... First value is how many columns it spans while the second value is how many rows it spans
        //Let's create an empty array with 50 blank spots and pass it as an object
        const digits = Array.from({length: 50}, () => [randomNumber(3), randomNumber(3)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

        // Create an HTML variable to take each digit array and map over each one by simply passing it to generateHTML()
        const html = digits.map(generateHTML).join("")    //join() will convert it to a string

        gallery.innerHTML += html;

        //Add 'CLICK' event listener to each item to pop up a modal
        const items = document.querySelectorAll('.item');

        items.forEach(item => item.addEventListener("mouseover", popItem))

        overlayClose.addEventListener("click", close);