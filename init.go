package burgergeddon

import (
	"net/http"

	"github.com/unrolled/render"
)

var (
	r = render.New(render.Options{
		Directory:     "public",
		Extensions:    []string{".html"},
		IsDevelopment: true,
	})
)

func init() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		r.HTML(w, 200, "index", nil)
	})

	http.Handle("/", mux)

}
