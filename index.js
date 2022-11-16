



let getOutlineBtn = document.getElementById('get-blog-outline')

getOutlineBtn.addEventListener('click', getText)

const input = document.querySelector('#prompt').value;


async function getText() {

    let _bodydata = {
        'model':'text-davinci-002', 
        'prompt': `${document.querySelector('#prompt').value}`,
        'max_tokens':200, 
        "temperature": 0.4, 
        "top_p":1.0
    }

    const response = await fetch('https://api.openai.com/v1/completions',{
    method: 'POST',
    body: JSON.stringify(_bodydata),
    headers: {'Content-type': 'application/json',
               'Authorization': 'Bearer '+ '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'}})
    const data = await response.json()
    const MYTEXT = data.choices[0].text
    document.querySelector('#outline').innerHTML = `<p>${MYTEXT}</p>`

}
  
    


// function getText(){fetch('https://api.openai.com/v1/completions', {
// method: 'POST',
// body: JSON.stringify(_bodydata),
// headers: {'Content-type': 'application/json', 
//           'Authorization': 'Bearer '+ CLIENT_SECRET}})
// .then(response => response.json()) 
// .then(data => {
//     const MYTEXT = data.choices[0].text
//     document.querySelector('#outline').innerHTML = `<p>${MYTEXT}</p>`})
// .catch(error => console.log(error))
// }

// let getPrompt = () => {
//     let prompt = document.getElementById('prompt').value;
// }


console.log(document.getElementById('prompt').value)

