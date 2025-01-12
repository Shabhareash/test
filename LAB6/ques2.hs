sumOfsquares :: [Int] -> Int
sumOfsquares = sum . map (^2) . filter (<=10)

main :: IO ()
main = print (sumOfsquares [5, 12, 9, 20, 15])
