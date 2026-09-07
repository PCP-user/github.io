// Ouvre la barre de recherche
document.querySelector('.search-container').addEventListener('click', function () {
    const input = document.querySelector('.search-input');
    input.style.width = '200px';
    input.style.opacity = 1;
    input.focus();
});

// Détecte la touche Entrée pour lancer la recherche
document.querySelector('#search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const query = this.value.trim();
        if (query !== '') {
            window.location.href = `recherche.html?q=${encodeURIComponent(query)}`;
        }
    }
});

// Pages présentes dans recherche
const donnees = [
{
nom: "Soja",
lien: "plante_glycine-max.html",
image: "images/images_plantes/glycine-max.jpg"
},
{
nom: "Kudzu",
lien: "plante_pueraria-lobata.html",
image: "images/images_plantes/pueraria-lobata.jpg"
},
{
nom: "Pueraria mirifica",
lien: "plante_pueraria-mirifica.html",
image: "images/images_plantes/pueraria-mirifica.jpg"
},
{
nom: "Haricot",
lien: "plante_phaseolus-vulgaris.html",
image: "images/images_plantes/phaseolus-vulgaris.jpg"
},
{
nom: "Luzerne",
lien: "plante_medicago-sativa.html",
image: "images/images_plantes/medicago-sativa.jpg"
},
{
nom: "Haricot mungo",
lien: "plante_vigna-radiata.html",
image: "images/images_plantes/vigna-radiata.jpg"
},
{
nom: "Trèfle violet",
lien: "plante_trifolium-pratense.html",
image: "images/images_plantes/trifolium-pratense.jpg"
},
{
nom: "Amande",
lien: "plante_prunus-dulcis.html",
image: "images/images_plantes/prunus-dulcis.jpg"
},
{
nom: "Noix-cajou",
lien: "plante_anacardium-occidentale.html",
image: "images/images_plantes/anacardium-occidentale.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "Cacahuète",
lien: "plante_arachis-hypogaea.html",
image: "images/images_plantes/arachis-hypogaea.jpg"
},
{
nom: "Niébé",
lien: "plante_vigna-unguiculata.html",
image: "images/images_plantes/vigna-unguiculata.jpg"
},
{
nom: "Petite oseille",
lien: "plante_rumex-acetosella.html",
image: "images/images_plantes/rumex-acetosella.jpg"
},
{
nom: "Bardane",
lien: "plante_arctium.html",
image: "images/images_plantes/arctium.jpg"
},
{
nom: "Avoine",
lien: "plante_avena-sativa.html",
image: "images/images_plantes/avena-sativa.jpg"
},
{
nom: "Maïs",
lien: "plante_zea-mays.html",
image: "images/images_plantes/zea-mays.jpg"
},
{
nom: "Orge",
lien: "plante_hordeum-vulgare.html",
image: "images/images_plantes/hordeum-vulgare.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "Sorgho",
lien: "plante_sorghum.html",
image: "images/images_plantes/sorghum.jpg"
},
{
nom: "Seigle",
lien: "plante_secale-cereale.html",
image: "images/images_plantes/secale-cereale.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "Riz",
lien: "plante_oryza.html",
image: "images/images_plantes/oryza.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "Psoralea",
lien: "plante_psoralea.html",
image: "images/images_plantes/psoralea.jpg"
},
{
nom: "Houblon",
lien: "plante_humulus-lupulus.html",
image: "images/images_plantes/humulus-lupulus.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "Réglisse",
lien: "plante_glycyrrhiza-glabra.html",
image: "images/images_plantes/glycyrrhiza-glabra.jpg"
},
{
nom: "Pois chiche",
lien: "plante_cicer-arietinum.html",
image: "images/images_plantes/cicer-arietinum.jpg"
},
{
nom: "Chardon-Marie",
lien: "plante_silybum-marianum.html",
image: "images/images_plantes/silybum-marianum.jpg"
},
{
nom: "Théier",
lien: "plante_camellia-sinensis.html",
image: "images/images_plantes/camellia-sinensis.jpg"
},
{
nom: "Lavande",
lien: "plante_lavandula.html",
image: "images/images_plantes/lavandula.jpg"
},
{
nom: "Pivoine de Chine",
lien: "plante_paeonia-lactiflora.html",
image: "images/images_plantes/paeonia-lactiflora.jpg"
},
{
nom: "Bourrache",
lien: "plante_borago-officinalis.html",
image: "images/images_plantes/borago-officinalis.jpg"
},
{
nom: "Onagre bisannuelle",
lien: "plante_oenothera-biennis.html",
image: "images/images_plantes/oenothera-biennis.jpg"
},
{
nom: "Olive",
lien: "plante_olea-europaea.html",
image: "images/images_plantes/olea-europaea.jpg"
},
{
nom: "Damiana",
lien: "plante_turnera-diffusa.html",
image: "images/images_plantes/turnera-diffusa.jpg"
},
{
nom: "Champignon de Paris",
lien: "plante_agaricus-bisporus.html",
image: "images/images_plantes/agaricus-bisporus.jpg"
},
{
nom: "Tabac",
lien: "plante_nicotiana.html",
image: "images/images_plantes/nicotiana.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "Mangoustan",
lien: "plante_garcinia-mangostana.html",
image: "images/images_plantes/garcinia-mangostana.jpg"
},
{
nom: "Lin",
lien: "plante_linum-usitatissimum.html",
image: "images/images_plantes/linum-usitatissimum.jpg"
},
{
nom: "Butea superba",
lien: "plante_butea-superba.html",
image: "images/images_plantes/butea-superba.jpg"
},
{
nom: "Palmier scie",
lien: "plante_serenoa-repens.html",
image: "images/images_plantes/serenoa-repens.jpg"
},
{
nom: "",
lien: "plante_.html",
image: "images/images_plantes/.jpg"
},
{
nom: "Prunier d'Afrique",
lien: "plante_prunus-africana.html",
image: "images/images_plantes/prunus-africana.jpg"
},
{
nom: "Citrouille",
lien: "plante_cucurbita-pepo.html",
image: "images/images_plantes/cucurbita-pepo.jpg"
},
{
nom: "Ortie",
lien: "plante_urtica-dioica.html",
image: "images/images_plantes/urtica-dioica.jpg"
},
{
nom: "Thé vert",
lien: "plante_camellia-sinensis.html",
image: "images/images_plantes/camellia-sinensis.jpg"
},
{
nom: "Ganoderme luisant",
lien: "plante_ganoderma-lucidum.html",
image: "images/images_plantes/ganoderma-lucidum.jpg"
},
{
nom: "Asperge sauvage",
lien: "plante_asparagus-racemosus.html",
image: "images/images_plantes/asparagus-racemosus.jpg"
},
{
nom: "Fénugrec",
lien: "plante_trigonella-foenum-graecum.html",
image: "images/images_plantes/trigonella-foenum-graecum.jpg"
},
{
nom: "Pavot à opium",
lien: "plante_papaver-somniferum.html",
image: "images/images_plantes/papaver-somniferum.jpg"
},
{
nom: "Kratom",
lien: "plante_mitragyna-speciosa.html",
image: "images/images_plantes/mitragyna-speciosa.jpg"
},
{
nom: "Akarkara",
lien: "plante_anacyclus-pyrethrum.html",
image: "images/images_plantes/anacyclus-pyrethrum.jpg"
},
{
nom: "Brède mafane",
lien: "plante_acmella-oleracea.html",
image: "images/images_plantes/acmella-oleracea.jpg"
},
{
nom: "Maca",
lien: "plante_lepidium-meyenii.html",
image: "images/images_plantes/lepidium-meyenii.jpg"
},
{
nom: "Bulbine natalensis",
lien: "plante_bulbine-natalensis.html",
image: "images/images_plantes/bulbine-natalensis.jpg"
},
];

// Fonction de recherche
function rechercher(terme) {
const resultats = donnees.filter(item =>
item.nom.toLowerCase().includes(terme.toLowerCase())
);

const container = document.getElementById("resultats-recherche");
container.innerHTML = "";

if (resultats.length === 0) {
container.innerHTML = "<p style='color: white;'>Aucun résultat trouvé.</p>";
return;
}

resultats.forEach(item => {
const tuile = document.createElement("a");
tuile.className = "tuile-plante";
tuile.href = item.lien;

tuile.innerHTML = `
<div class="image-container">
<img src="${item.image}" alt="${item.nom}" loading="lazy">
<div class="nom-plante">${item.nom}</div>
</div>
`;

container.appendChild(tuile);
});
}

document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("search-input");

// Détection de la touche Enter 2
input.addEventListener("keydown", e => {
if (e.key === "Enter") {
rechercher(input.value);
}
});

// q recherche dans l'URL
const params = new URLSearchParams(window.location.search);
const query = params.get("q");
if (query) {
input.value = query;
rechercher(query);
}
});