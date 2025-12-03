function initVisitorCounter() {
    const counter = document.getElementById("visitorCount");

    let visitorCount = localStorage.getItem("visitorCount");

    if (!visitorCount) visitorCount = 0;
    visitorCount++;

    localStorage.setItem("visitorCount", visitorCount);
    counter.textContent = visitorCount;

    console.log(`Telah menambahkan pengunjung : ${visitorCount}`);
}

window.addEventListener("load", initVisitorCounter);

function initMap() {
    const map = L.map("map").setView([38.292565, -7.820356], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
    }).addTo(map);

    L.marker([38.292565, -7.820356])
      .addTo(map)
      .bindPopup("<b>Portugal</b><br>Portugal")
      .openPopup();
}

window.addEventListener("load", initMap);