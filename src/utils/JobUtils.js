module.exports = {
    remainingDays(job){
        // ajustar no job, e cacular o tempo restante
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
    
        const createdDate = new Date(job.created_at);
        const dueDay = createdDate.getDate() + Number(remainingDays);
        const dueDayInMs = createdDate.setDate(dueDay);
    
        const timeDiffInMs = dueDayInMs - Date.now();
        //transformar millis em dias
        const dayInMs = 1000 * 60 * 60 * 24;
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs);
    
        // restam x dias
        return dayDiff;
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}