const LinksSocialMedia = {
  github: 'lucashaugustogt',
  youtube: 'nomeuseryt',
  facebook: 'nomeuserfb',
  instagram: 'lucashaugusto',
  twitter: 'lucashaugusto'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      urlGit.href = data.html_url
      linkusernameGit.textContent = data.login
      avatarGit.src = data.avatar_url
    })
}

getGitHubProfileInfos()

/*function showMeSometinhg() {
  alert(userSocialMedia.youtube)
}

showMeSometinhg()*/

/*

camelCase
PascalCase
snake_case

function changeSocialMediaLinks() {
  document.getElementById('userName').textContent = 'Olivia'
}

Já entende que é um ID
userName.textContent = 'Marcelo'

// index = 0 -> Quando o for vai começar
  // index <=10 -> Quando o for vai parar
  // i++ -> Incremento
  /*for (let index = 0; index <= 10; index++) {
    const element = array[index]
  }*/
