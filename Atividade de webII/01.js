// Função para calcular a idade com base na data de nascimento
function caculateAge(dt) {
    const birthDate = new Date(dt);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Ajustar Data nescimento
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Uso
console.log(caculateAge("2000-01-01")); // Substitua pela data de nascimento desejada
