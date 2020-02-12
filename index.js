const get_class = class_name => document.getElementsByClassName(class_name);
const class_array = Object.values(get_class(`jobsearch-SerpJobCard`));
class_array.forEach(item => {
  if(item.innerText.includes(`Sponsored`) && item.innerText.includes(`days ago`)){
  	item.style.display = `none`;
  };
});