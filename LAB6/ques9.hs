productofoddsquares :: [Int] -> Int
productofoddsquares = foldl (*) 1 . map (^2) . filter odd

main :: IO ()
main = print (productofoddsquares [1, 2, 3, 4, 5, 6])
