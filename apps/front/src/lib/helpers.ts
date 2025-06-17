import { DEFAULT_PAGINATION_TAKE } from './constants'

export const transformTakeSkip = ({ page, pageSize }: { page?: number; pageSize?: number }) => {
    return {
        skip: ((page ?? 1) - 1) * (pageSize || DEFAULT_PAGINATION_TAKE),
        take: pageSize || DEFAULT_PAGINATION_TAKE,
    }
}

export const calculatePageNumbers = ({ pageNeighbors, totalPages, currentPage }: { pageNeighbors: number; totalPages: number; currentPage: number }) => {
    const totalNumbers = pageNeighbors * 2 + 3
    const totalBlocks = totalNumbers + 2 // For "First" and "Last" blocks

    if (totalPages > totalBlocks) {
        const startPage = Math.max(2, currentPage - pageNeighbors)
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors)

        let pages: (number | string)[] = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

        if (startPage > 2) {
            pages = ['...', ...pages]
        }

        if (endPage < totalPages - 1) {
            pages = [...pages, '...']
        }

        return [1, ...pages, totalPages]
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1)
}
