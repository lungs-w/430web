function enterSite() {
    function checkAnswers() {
        const a1 = document.getElementById("q1").value.trim().toLowerCase();
        const a2 = document.getElementById("q2").value.trim();
        const a3 = document.getElementById("q3").value.trim().toLowerCase();
      
        if (a1 === "1999" && a2 === "Tsrika" && (a3 === "176" || a3 === "153")) {
          // 正确就跳转
          window.location.href = "main.html";
        } else {
          // 错误就提示
          document.getElementById("result").textContent = "答案不正确，请再试一次！";
        }
      }
      
  }
  