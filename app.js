document.getElementById("search").addEventListener("click", ()=> {
    display();
});

async function getCharacterInfo(characterId) {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`No se pudo obtener datos del personaje ${characterId}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  async function display() {
    const characterId = document.getElementById("name").value;
    const characterInfo = await getCharacterInfo(characterId);
    addRickUI(characterInfo);
  }

  function addRickUI (characterInfo){
    const list = document.getElementById("container");
    const element = document.createElement("div");
    element.innerHTML = `
    <strong>Id: </strong>${characterInfo.origin.name}
    <strong>Name: </strong>${characterInfo.name}
    <strong>Base xp :</strong>${characterInfo.species}
    <strong>Firs ability: </strong>${characterInfo.status}
    `;
    list.appendChild(element);  
 }


  




