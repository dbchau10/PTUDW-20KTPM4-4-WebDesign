const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


async function onSubmit(e) {
    e.preventDefault();
    const sdt = $('#phone').value;
    const password = $('#password').value;

    const formData = {
        sdt,
        password
    }

    const data = await fetchData('http://example.com/movies.json', POST, formData)

    console.log(data);
}


$('.loginBtn').onclick = onSubmit;