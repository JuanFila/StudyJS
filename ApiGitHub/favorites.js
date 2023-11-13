import { GithubUser } from "./githubUser.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);

        this.load()
        
    }


    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];

    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {

            const userExist = this.entries.find(entry => entry.login === username)

            if(userExist) {
                throw new Error('Usuario já existe')
            }

            const user = await GithubUser.search(username)
            
            if(user.login === undefined){
                throw new Error('Usuario não encontrado')
            } 

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch (error) {
            alert(error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.entries
          .filter(entry => entry.login !== user.login)

          this.entries = filteredEntries
          this.update()
          this.delete()
    }
}


export class FavoritesView extends Favorites {
    constructor(root) {
        super(root);

        this.tbody = this.root.querySelector('table tbody')
        
        this.update()
        this.onAdd()
    }

    onAdd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const {value} = this.root.querySelector('.search input')
            // aqui estamos desestruturando o input e pegando o value que está dentro do input

            this.add(value)
            
        }
    }
    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user span').textContent= user.login
            row.querySelector('.repositores').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.follower

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha ?')

                if(isOk) {
                    this.delete(user)
                }

            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr');

        tr.innerHTML = `
    <tr>
    <td class="user">
        <img src="https://avatars.githubusercontent.com/u/98987512?v=4" alt="fotoGitHub">
        <a href="https://github.com/JuanFila" target="_blank">
            <p>Juan Fila</p>
            <span>Juan</span>
        </a>
        
    </td>

    <td class="repositores">27</td>

    <td class="followers">6</td>

    <td><button class="remove">&times;</button></td>
    </tr>

    `
        return tr

    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {

                tr.remove()

            })
    }
}