(in-package :mu-cl-resources)

(define-resource tag ()
  :class (s-prefix "ext:Tag")
  :properties `((:title :string ,(s-prefix "schema:headLine")))
  :resource-base (s-url "http://8og.ir/services/github/mehran-naghizadeh/8ogir-tags-service/tags/")
  :on-path "tags")