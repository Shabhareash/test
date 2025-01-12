stringlengthssum :: [String] -> Int
stringlengthssum = foldl (+) 0 . map length

main :: IO ()
main = print (stringlengthssum ["hello", "world", "haskell"])
