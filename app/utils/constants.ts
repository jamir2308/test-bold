export const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];


export const getWeekRange = (): string => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - dayOfWeek);
  
    const saturday = new Date(now);
    saturday.setDate(now.getDate() + (6 - dayOfWeek));
  
    const startDay = sunday.getDate();
    const startMonth = monthNames[sunday.getMonth()];
  
    const endDay = saturday.getDate();
    const endMonth = monthNames[saturday.getMonth()];
    return `${startDay} ${startMonth} al ${endDay} ${endMonth}`;
};

export const breakpoints = {
    xs: '440px',
    mobile: '600px',
    tablet: '768px',
    desktop: '1024px',
};