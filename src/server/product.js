'use strict'

import axios from "axios"
import { useRouter } from "vue-router"
import swal from "sweetalert2"
import { uniqBy, countBy } from "lodash"

var url = "https://test-test-app-mx.herokuapp.com"
const PRODUCTS = "products"

export async function getLastproducts() {

    var products = []
    await axios.get(url + "/product/get-products/last").then((res) => {
        if (res.data.status == "successfull") {
            products = res.data.product;
        } else {
            products = []
        }
    });

    return products;

}
export async function getProductId(value) {

    var products = []
    await axios.get(url + "/product/get-product/" + value).then((res) => {
        if (res.data.status == "successfull") {
            products = res.data.product;
        } else {
            products = []
        }
    });

    return products;

}
export async function getProducts() {

    var products = []
    await axios.get(url + "/product/get-products/").then((res) => {
        if (res.data.status == "successfull") {
            products = res.data.product;
        } else {
            products = []
        }
    });

    return products;

}
export async function searchProducts(value) {

    var products = []
    await axios.get(url + "/product/search-products/" + value).then((res) => {
        if (res.data.message) {
            products = res.data.products;
        } else if (!res.data.message) {
            products = null;
        } else {
            []
        }

    });

    return products;

}
export function pushSearch(value) {
    const router = useRouter();
    router.push("/");
}

export async function validateUser(email, password) {

    var user = []
    var result = false
    await axios.get(url + "/user/validate-user/" + email + "&" + password).then((res) => {
        if (res.data.status == "successfull") {
            user = res.data.user
            localStorage.setItem("ROL", res.data.user.rol)
            localStorage.setItem("NAME", res.data.user.first_name)
            localStorage.setItem("ID", res.data.user._id)
            if (res.data.user.rol == "60db2f231b05cc34808d1944") {
                result = 2
            } else if (res.data.user.rol == "60db2f181b05cc34808d1942") {

                result = 1
            } else {
                result = 0
            }

        } else if (res.data.status == "error") {
            result = false
        }
    })

    return result
}

export async function searchEmail(value) {

    var result = false
    await axios.get(url + "/user/search-email/" + value.email).then((res) => {
        if (res.data.status == "successfull") {
            result = false
        } else {
            result = true
        }
    });

    return result

}
export async function createUser(value) {

    var result = false
    await axios.post(url + "/user/save-user/", value).then((res) => {
        if (res.data.status == "successfull") {
            result = true
        } else {
            result = false
        }
    });

    return result

}
export async function getUserId(value) {

    var user = []
    await axios.get(url + "/user/get-user/" + value).then((res) => {
        if (res.data.status == "successfull") {
            console.log(user);
            user = res.data.user;
        } else {
            user = []
        }
    });

    return user;

}
export async function updateClient(value, file) {

    let result = false
    let aux = false
    await swal.fire({
        title: 'Deseas relizar los cambios?',
        showCancelButton: true,
        confirmButtonText: `Si`,
    }).then((result) => {
        if (result.isConfirmed) {
            aux = true
        } else if (result.isDenied) {
            aux = false
        }
    })


    if (aux) {
        swal.fire({
            text: "Actulizando datos",
            imageUrl: "https://mxitli.000webhostapp.com/upload-2.svg",
            imageHeight: 88,
            showConfirmButton: false,
        });
        if (file.files[0] != undefined) {
            const formData = new FormData();
            formData.append("file0", file.files[0], file.files[0].name);
            axios.post(url + "/upload-user/" + value._rawValue._id, formData).then((res) => {
                console.log(res.data.user);
                if (res.data.user) {
                    console.log("success");
                }
            });
        }
        await axios.put(url + "/user/update-user/" + value._rawValue._id, value._rawValue).then((res) => {
            if (res.data.status == "successfull") {
                result = true
            } else {
                result = false
            }
        });
    }

    return result
}

export async function closeSesion() {

    const router = useRouter();

    swal.fire({
        text: "Cerrando sesion",
        imageUrl: "https://mxitli.000webhostapp.com/upload-2.svg",
        imageHeight: 88,
        showConfirmButton: false,
        timer: 1500,
    });
    localStorage.removeItem("ROL");
    localStorage.removeItem("ID");
    localStorage.removeItem("NAME");
    router.push("/");

}

export async function addProductCart(id) {
    const products = getCart()
    products.push(id)
    localStorage.setItem(PRODUCTS, JSON.stringify(products))
}

export function getCart() {
    const products = localStorage.getItem(PRODUCTS)
    if (!products) {
        return []
    } else {
        return JSON.parse(products)
    }
}

export async function getProductsCart() {

    const idProducts = getCart()

    let products = []
    let productsCount
    let productsCombined


    if (idProducts.length === 0) {
        products = []
    } else {

        for await (const idProduct of idProducts) {
            await axios.get(url + "/product/get-product/" + idProduct).then((res) => {
                if (res.data.status == "successfull") {
                    //console.log(res.data.product)                        
                    products.push(res.data.product)
                }
            })
        }

        productsCount = countBy(products, (product) => {
            return product._id
        })
        productsCombined = uniqBy(products, (product) => {
            const productTemp = product
            productTemp.quantity = productsCount[product._id]
            return productTemp._id
        })

    }

    //console.log(Object.keys(productsCount).length);
    //console.log(productsCombined);
    //console.log(products);
    return productsCombined

}

export async function getCountCart() {

    const idProducts = getCart()

    let products = []
    let productsCount
    let productsCombined


    if (idProducts.length === 0) {
        products = []
    } else {

        for await (const idProduct of idProducts) {
            await axios.get(url + "/product/get-product/" + idProduct).then((res) => {
                if (res.data.status == "successfull") {
                    //console.log(res.data.product)                        
                    products.push(res.data.product)
                }
            })
        }

        productsCount = countBy(products, (product) => {
            return product._id
        })
        productsCombined = uniqBy(products, (product) => {
            const productTemp = product
            productTemp.quantity = productsCount[product._id]
            return productTemp._id
        })



    }

    //console.log(productsCombined);
    //console.log(products);
    return Object.keys(productsCount).length

}

export async function getUsers() {

    var users = []
    await axios.get(url + "/user/get-users/").then((res) => {
        if (res.data.status == "successfull") {
            users = res.data.user;
        } else {
            users = []
        }
    });

    return users;

}

export async function getUsersForRols(value) {

    var users = []
    await axios.get(url + "/user/search-users-rol/" + value).then((res) => {
        if (res.data.message == "successfull") {
            users = res.data.users;
        } else {
            users = []
        }
    });

    return users;

}

export async function deleteUser(value) {

    var users = []
    await axios.get(url + "/user/search-users-rol/" + value).then((res) => {
        if (res.data.message == "successfull") {
            users = res.data.users;
        } else {
            users = []
        }
    });

    return users;

}
export async function getRols() {

    var rols = []
    await axios.get(url + "/rol/get-rols/").then((res) => {
        if (res.data.status == "successfull") {
            rols = res.data.rol;
        } else {
            rols = []
        }
    });

    return rols;

}