const apiKey = '';

document.getElementById('fetchButton').addEventListener('click', () => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.data.map((e,i)=> {
                const gifUrl =  e.images.original.url;
                const gifDiv = document.createElement('div');
                gifDiv.innerHTML = `<img src="${gifUrl}" alt="Random Gif">`;
                document.getElementById('gifContainer').appendChild(gifDiv);
            })
            
            
        })
        .catch(error => console.error('Error fetching the GIF:', error));
});

// document.getElementById('fetchButton').addEventListener('click', ()=>{
//     console.log('im being clicked!!! ')
// })