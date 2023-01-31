function calculateTip(event) {
  event.preventDefault()
  let bill = document.getElementById("bill").value
  let ServiceQuali = document.getElementById("serviceQuali").value
  let people = document.getElementById("people").value

  if ((bill == "") | (serviceQuali == 0)) {
    alert("Por favor, preencha os valores")
    return
  }

  if ((people == "") | (people <= 0)) {
    people = 1
    document.getElementById("each").style.display = "none"
  } else {
    document.getElementById("each").style.display = "block"
  }

  let total = (bill * ServiceQuali) / people
  total = total.toFixed(2)
  document.getElementById("tip").innerHTML = total
  document.getElementById("totalTip").style.display = "block"
}

document.getElementById("totalTip").style.display = "none"
document.getElementById("each").style.display = "none"

document.getElementById("tipsForm").addEventListener("submit", calculateTip)
