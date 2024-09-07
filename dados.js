/* será exibido no app.js */
let dados = [
    {
        titulo: "Onça-Pintada",
        descricao: "A onça-pintada é o maior felino das Américas e um dos mais poderosos predadores do mundo. Com sua pelagem dourada e manchas pretas características, ela reina absoluta em diversas regiões do continente. A onça-pintada é um animal solitário e territorial, com uma dieta variada que inclui desde pequenos roedores até grandes mamíferos. Apesar de sua força e ferocidade, a espécie enfrenta sérios riscos de extinção devido à perda de habitat e à caça ilegal. Sua presença é fundamental para o equilíbrio dos ecossistemas e a onça-pintada é considerada um símbolo da fauna brasileira.",
        link: "https://pt.wikipedia.org/wiki/Panthera_onca",
        alimentacao: "Carnívoro",
        conservacao: "Ameaça alta",
        classe: "Mammalia",
        especie: "Panthera onca",
        ocorrencia: "América Central e do Sul, em diversas florestas tropicais e savanas.",
        tags: "felino onca pintada carnivoro felino predador mamífero selva ameaçado fauna_brasileira biodiversidade"
    },
    
    {
        titulo: "Tucano de Bico Amarelo",
        descricao: "O tucano de bico amarelo é uma ave tropical conhecida por seu bico grande e colorido. Essa característica distintiva serve tanto para regular a temperatura do corpo quanto para atrair parceiros. Sua dieta consiste principalmente de frutas, mas também inclui insetos e pequenos vertebrados. O tucano de bico amarelo é uma espécie sociável, vivendo em bandos e desempenhando um papel importante na dispersão de sementes.",
        link: "https://www.wikiaves.com.br/wiki/tucanucu",
        alimentacao: "Frutívoro",
        conservacao: "Ameaça baixa",
        classe: "Aves",
        especie: "Ramphastos vitellinus",
        ocorrencia: "Florestas tropicais da América Central e do Sul.",
        tags: "ave tropical frutivoro pássaro bico_colorido fauna_neotropical"
    },
    
    {
        titulo: "Tamanduá Bandeira",
        descricao: "O tamanduá bandeira é um mamífero noturno e solitário, facilmente reconhecido por sua pelagem longa e listrada em preto e branco. Seu corpo é adaptado para se alimentar de formigas e cupins, utilizando sua língua longa e pegajosa para capturar esses insetos. O tamanduá bandeira é um animal lento e pacífico, mas pode se defender com suas garras afiadas quando se sente ameaçado. A espécie está ameaçada pela destruição de seu habitat e pela caça ilegal.",
        link: "https://pt.wikipedia.org/wiki/Tamanduá-bandeira",
        alimentacao: "Insetívoro",
        conservacao: "Vulnerável",
        classe: "Mammalia",
        especie: "Myrmecophaga tridactyla",
        ocorrencia: "Savanas e florestas tropicais da América Central e do Sul.",
        tags: "mamífero formigueiro noturno pangolin fauna_brasileira ameaçado"
    },

    // Aves
    {
        titulo: "Arara Azul",
        descricao: "A arara azul é uma ave símbolo do Brasil, conhecida por suas penas vibrantes e pela sua importância cultural. Habita as florestas tropicais da América do Sul.",
        link: "https://pt.wikipedia.org/wiki/Arara-azul",
        alimentacao: "Frutívora",
        conservacao: "Vulnerável",
        classe: "Aves",
        especie: "Anodorhynchus hyacinthinus",
        ocorrencia: "América do Sul",
        tags: "ave arara azul brasil fauna_brasileira vulnerável"
    },

    {
        titulo: "Mico-leão-dourado",
        descricao: "O mico-leão-dourado é um primata endêmico da Mata Atlântica brasileira, conhecido por sua pelagem dourada e olhos expressivos.",
        link: "https://pt.wikipedia.org/wiki/Mico-leão-dourado",
        alimentacao: "Frutívoro, insetívoro",
        conservacao: "Criticamente ameaçado",
        classe: "Mammalia",
        especie: "Leontopithecus rosalia",
        ocorrencia: "Mata Atlântica, Brasil",
        tags: "primata mico_leão_dourado mata_atlântica brasil ameaçado"
    },

    {
        titulo: "Capivara",
        descricao: "A capivara é o maior roedor do mundo e é encontrada em diversos ambientes aquáticos da América do Sul.",
        link: "https://pt.wikipedia.org/wiki/Capivara",
        alimentacao: "Herbívoro",
        conservacao: "Menos preocupante",
        classe: "Mammalia",
        especie: "Hydrochoerus hydrochaeris",
        ocorrencia: "América do Sul",
        tags: "roedor capivara américa_do_sul herbívoro"
    },
    // Aves brasileiras
    {
        titulo: "Arara-azul-de-Lear",
        descricao: "A arara-azul-de-Lear é uma das aves mais raras do mundo e endêmica da caatinga brasileira.",
        link: "https://pt.wikipedia.org/wiki/Arara-azul-de-Lear",
        alimentacao: "Frutívora",
        conservacao: "Criticamente ameaçada",
        classe: "Aves",
        especie: "Anodorhynchus leari",
        ocorrencia: "Caatinga, Brasil",
        tags: "ave arara_azul_de_lear caatinga brasil ameaçado"
    },
    // Répteis brasileiros
    {
        titulo: "Sucuri",
        descricao: "A sucuri é uma das maiores serpentes do mundo e habita os rios da América do Sul.",
        link: "https://pt.wikipedia.org/wiki/Sucuri",
        alimentacao: "Carnívora",
        conservacao: "Quase ameaçada",
        classe: "Reptilia",
        especie: "Eunectes murinus",
        ocorrencia: "América do Sul",
        tags: "réptil sucuri serpente américa_do_sul"
    },

    {
        titulo: "Mão-pelada",
        descricao: "A mão-pelada é um marsupial noturno, arborícola e endêmico da Mata Atlântica. É conhecida por sua cauda preênsil e pelos seus dedos longos e finos.",
        link: "https://pt.wikipedia.org/wiki/Mão-pelada",
        alimentacao: "Omnívoro",
        conservacao: "Vulnerável",
        classe: "Mammalia",
        especie: "Chironectes minimus",
        ocorrencia: "Mata Atlântica, Brasil",
        tags: "marsupial mão_pelada mata_atlântica brasil"
    },

    {
        titulo: "Ariranha",
        descricao: "A ariranha é a maior lontra do mundo e vive em grupos familiares nas regiões de água doce da América do Sul.",
        link: "https://pt.wikipedia.org/wiki/Ariranha",
        alimentacao: "Carnívoro",
        conservacao: "Vulnerável",
        classe: "Mammalia",
        especie: "Pteronura brasiliensis",
        ocorrencia: "América do Sul",
        tags: "lontra ariranha américa_do_sul carnívoro"
    },
    // Aves brasileiras
    {
        titulo: "Jacutinga",
        descricao: "A jacutinga é uma ave da ordem Galliformes, conhecida por sua beleza e importância ecológica na dispersão de sementes.",
        link: "https://pt.wikipedia.org/wiki/Jacutinga",
        alimentacao: "Omnívora",
        conservacao: "Vulnerável",
        classe: "Aves",
        especie: "Pipile jacutinga",
        ocorrencia: "Mata Atlântica, Brasil",
        tags: "ave jacutinga mata_atlântica brasil"
    },
    // Répteis brasileiros
    {
        titulo: "Boto-cor-de-rosa",
        descricao: "O boto-cor-de-rosa é um golfinho de água doce encontrado nos rios da Amazônia. É conhecido por sua inteligência e por mudar de cor.",
        link: "https://pt.wikipedia.org/wiki/Boto-cor-de-rosa",
        alimentacao: "Carnívoro",
        conservacao: "Dados insuficientes",
        classe: "Mammalia",
        especie: "Inia geoffrensis",
        ocorrencia: "Bacia Amazônica",
        tags: "boto_cor_de_rosa mamífero aquático amazônia"
    },
    // Anfíbios brasileiros
    {
        titulo: "Sapo-cururu",
        descricao: "O sapo-cururu é um anfíbio comum em diversas regiões do Brasil, conhecido por sua pele seca e verrugas.",
        link: "https://pt.wikipedia.org/wiki/Sapo-cururu",
        alimentacao: "Carnívoro",
        conservacao: "Menos preocupante",
        classe: "Amphibia",
        especie: "Rhinella icterica",
        ocorrencia: "Brasil",
        tags: "anfíbio sapo_cururu brasil"
    },
    // Peixes brasileiros
    {
        titulo: "Pirarucu",
        descricao: "O pirarucu é um dos maiores peixes de água doce do mundo e é uma espécie importante para a pesca na Amazônia.",
        link: "https://pt.wikipedia.org/wiki/Pirarucu",
        alimentacao: "Carnívoro",
        conservacao: "Vulnerável",
        classe: "Actinopterygii",
        especie: "Arapaima gigas",
        ocorrencia: "Amazônia",
        tags: "peixe pirarucu amazônia"
    },

    {
        titulo: "Tatu-bola",
        descricao: "O tatu-bola é um mamífero conhecido por sua capacidade de se enrolar em uma bola para se proteger de predadores. Habita diversos biomas brasileiros.",
        link: "https://pt.wikipedia.org/wiki/Tatu-bola",
        alimentacao: "Onívoro",
        conservacao: "Menos preocupante",
        classe: "Mammalia",
        especie: "Tolypeutes tricinctus",
        ocorrencia: "Brasil",
        tags: "tatu bola mamífero brasil"
    },
    {
        titulo: "Preguiça-de-três-dedos",
        descricao: "A preguiça-de-três-dedos é um mamífero lento e arborícola, adaptado para a vida nas copas das árvores da floresta amazônica.",
        link: "https://pt.wikipedia.org/wiki/Preguiça-de-três-dedos",
        alimentacao: "Folívoro",
        conservacao: "Vulnerável",
        classe: "Mammalia",
        especie: "Bradypus tridactylus",
        ocorrencia: "Amazônia",
        tags: "preguiça mamífero amazônia"
    },
    // Aves brasileiras
    {
        titulo: "Mutum",
        descricao: "O mutum é uma ave terrestre de grande porte, encontrada em diversas regiões do Brasil. É conhecido por sua beleza e importância ecológica.",
        link: "https://pt.wikipedia.org/wiki/Mutum",
        alimentacao: "Omnívora",
        conservacao: "Vulnerável",
        classe: "Aves",
        especie: "Crax",
        ocorrencia: "Brasil",
        tags: "ave mutum brasil"
    },
    // Répteis brasileiros
    {
        titulo: "Jararaca",
        descricao: "A jararaca é uma serpente peçonhenta encontrada em diversas regiões do Brasil. É uma das serpentes mais temidas do país.",
        link: "https://pt.wikipedia.org/wiki/Jararaca",
        alimentacao: "Carnívora",
        conservacao: "Poucos dados",
        classe: "Reptilia",
        especie: "Bothrops jararaca",
        ocorrencia: "Brasil",
        tags: "réptil jararaca brasil"
    },
    // Anfíbios brasileiros
    {
        titulo: "Rã-venenosa",
        descricao: "As rãs venenosas são anfíbios coloridos e venenosos, encontrados em diversas regiões tropicais do Brasil. São utilizadas na pesquisa científica.",
        link: "https://pt.wikipedia.org/wiki/Dendrobatidae",
        alimentacao: "Carnívora",
        conservacao: "Varia por espécie",
        classe: "Amphibia",
        especie: "Dendrobatidae",
        ocorrencia: "Brasil",
        tags: "anfíbio rã_venenosa brasil"
    },
    // Invertebrados brasileiros
    {
        titulo: "Joanes",
        descricao: "Os joanes são crustáceos decápodes, parentes próximos dos caranguejos, encontrados em manguezais e estuários brasileiros.",
        link: "https://pt.wikipedia.org/wiki/Uca",
        alimentacao: "Omnívoro",
        conservacao: "Poucos dados",
        classe: "Malacostraca",
        especie: "Uca",
        ocorrencia: "Brasil",
        tags: "invertebrado joanes brasil"
    }
];

