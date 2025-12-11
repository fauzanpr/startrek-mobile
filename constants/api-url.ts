export const SU_API_URL = {
    DASHBOARD_TOTAL_PRODUCT_SOLD: {
        INDEX: "/su/dashboard/total-products-sold/"
    },
    DASHBOARD_POINTS_GIVEN: {
        INDEX: "/su/dashboard/points-given/"
    },
    DASHBOARD_POINTS_REDEEMED: {
        INDEX: "/su/dashboard/points-redeemed/"
    },
    DASHBOARD_TOTAL_PRODUCTS: {
        INDEX: "/su/dashboard/total-products/"
    },
    COMPANY: {
        INDEX: "/su/company/companies/",
        DETAIL: "/su/company/companies/:id/"
    }
}

export const API_URL = {
    LOGIN: {
        INDEX: "/token/"
    },
    ...SU_API_URL
}