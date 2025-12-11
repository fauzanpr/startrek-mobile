// global.d.ts atau declarations.d.ts

// Deklarasi untuk file gambar
declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}
// Tambahkan .svg, .jpeg, dll. jika Anda mengimpor jenis file tersebut