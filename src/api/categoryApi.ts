import { api } from "../lib/axios";

//1.tampil semua category
export const getCategories = async () => {
    const response = await api.get("/categories");

    return response.data;
}

//2.menyimpan category baru 
export const createCategory = async (data: { name: string }) => {}

//3.menampilkan category berdasarkan id 
export const getCategoryById = async (id: number) => {}

//4.update category berdasarkan id 
export const updateCategory = async (id: number, data: { name: string }) => {}

//5.hapus category berdasarkan id
export const deleteCategory = async (id: number) => {}