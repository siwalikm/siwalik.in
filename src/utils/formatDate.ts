// formatdateFn() to convert to MMMM-YYYY
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
};