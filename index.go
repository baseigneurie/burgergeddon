package main

import (
	"net/http"
	"text/template"
)

func main() {
	http.HandleFunc("/", home)

	http.ListenAndServe(":3000", nil)
}

func home(w http.ResponseWriter, r *http.Request) {
	t, err := template.New("main").Parse("views/main.html")
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	err = t.ExecuteTemplate(w, "main", "Hello!")

}
