
let header = {},
    footer = {};
    home = {};

let modules_description = {};

 modules_description[`random`] = {modulename:`Random`, moduleid:`random`,
          iconsclasslist:["fas", "fa-random"],
          description: `Module Random`,
          descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
         }

 modules_description[`matrix`] =  {modulename:`Matrix`, moduleid:`matrix`,
          iconsclasslist:["fas", "fa-th"],
          description: `Module Matrix`,
          descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
        }

 modules_description[`segmentation`] =  {modulename:`Segmentation`, moduleid:`segmentation`,
        iconsclasslist:["fas", "fa-ellipsis-h"],
        description: `Module Segmentation`,
        descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
        }

  modules_description[`vecmentation`] =  {modulename:`Vecmentation`, moduleid:`vecmentation`,
        iconsclasslist:["fas", "fa-signal"],
        description: `Module vecmentation`,
        descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
        }
  modules_description[`indexation`] =  {modulename:`Indexation`, moduleid:`indexation`,
        iconsclasslist:["fab", "fa-keycdn"],
        description: `Module Indexation`,
        descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
       }



document.addEventListener("DOMContentLoaded", function() {   
  headerIni(header);
  homeIni(home);
  footerIni(footer);
 
});