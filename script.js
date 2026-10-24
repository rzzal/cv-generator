// Memastikan script berjalan setelah seluruh struktur HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // Helper function: Menghubungkan ID Input dengan ID Preview secara otomatis
    function syncInputToPreview(inputId, previewId, defaultText) {
        const inputElement = document.getElementById(inputId);
        const previewElement = document.getElementById(previewId);

        // Dengarkan setiap kali pengguna mengetik (event: 'input')
        inputElement.addEventListener("input", function () {
            // Jika kolom diisi, tampilkan nilainya. Jika kosong, tampilkan teks bawaan/default
            if (inputElement.value.trim() !== "") {
                previewElement.textContent = inputElement.value;
            } else {
                previewElement.textContent = defaultText;
            }
        });
    }

    // 1. Menghubungkan Data Diri Utama
    syncInputToPreview("fullName", "previewName", "Nama Lengkap Kamu");
    syncInputToPreview("jobTitle", "previewTitle", "Jurusan / Keahlian Utama");
    syncInputToPreview("email", "previewEmail", "email@example.com");
    syncInputToPreview("phone", "previewPhone", "08123456789");
    syncInputToPreview("location", "previewLocation", "Kota, Provinsi");
    syncInputToPreview("about", "previewAbout", "Deskripsi singkat profil kamu akan muncul di sini...");

    // 2. Menghubungkan Pendidikan & Pengalaman
    syncInputToPreview("education", "previewEducation", "Nama Sekolah / Instansi Pendidikan");
    syncInputToPreview("experienceTitle", "previewExpTitle", "Posisi / Tempat PKL");
    syncInputToPreview("experienceDesc", "previewExpDesc", "Penjelasan mengenai tanggung jawab atau pengalaman yang kamu miliki.");

    // 3. Logika Khusus untuk Format Keahlian/Skill (Memisah Kata Berdasarkan Koma)
    const skillsInput = document.getElementById("skills");
    const previewSkills = document.getElementById("previewSkills");

    skillsInput.addEventListener("input", function () {
        const skillsArray = skillsInput.value.split(","); // Memecah string menjadi array berdasarkan tanda koma
        previewSkills.innerHTML = ""; // Bersihkan list lama

        skillsArray.forEach(function (skill) {
            const trimmedSkill = skill.trim();
            if (trimmedSkill !== "") {
                const li = document.createElement("li");
                li.textContent = trimmedSkill;
                previewSkills.appendChild(li); // Tambahkan elemen ke dalam list
            }
        });

        // Jika form kosong, tampilkan contoh bawaan
        if (skillsInput.value.trim() === "") {
            previewSkills.innerHTML = "<li>Skill 1</li><li>Skill 2</li><li>Skill 3</li>";
        }
    });

});
