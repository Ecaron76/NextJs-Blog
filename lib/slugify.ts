export function slugify(str: string){
    return String(str)
        .normalize("NKFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLocaleLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g,"-")
        .replace(/--+/g,"-")
}