package main

import (
	"net/http"
	"text/template"
)

func init() {
	http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("style"))))
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("images"))))
	http.HandleFunc("/", home)
	http.ListenAndServe(":8080", nil)
}

func home(w http.ResponseWriter, r *http.Request) {
	t, err := template.New("main").ParseFiles("views/main.tmpl")
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	err = t.ExecuteTemplate(w, "main", nil)

}
