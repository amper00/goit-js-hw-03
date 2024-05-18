function slugify(title)
{
 const slug = title.toLowerCase();
return slug.join("-");

}

console.log(slugify("Arrays for begginers")); 